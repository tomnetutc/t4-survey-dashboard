'use client';

import React, { useState, useCallback, useEffect } from 'react';
import "@components/univariate.scss";
import { useDocumentTitle } from '@utility';
import { NavBar, Footer, LoadingOverlay, Option } from "@components";
import BivariateAnalysis from '@components/Bivariate';

export function Bivariate(): JSX.Element {
    const [menuSelectedOptions, setMenuSelectedOptions] = useState<Option[]>([]);
    const [crossSegmentSelectedOptions, setCrossSegmentSelectedOptions] = useState<Option[][]>([[]]);
    const [includeDecemberToggle, setIncludeDecember] = useState(true);
    const [isWithinYearLoading, setIsWithinYearLoading] = useState(true);
    const [isBtwYearLoading, setIsBtwYearLoading] = useState(true);
    const [isCrossSegmentLoading, setIsCrossSegmentLoading] = useState(true);
    const [analysisType, setAnalysisType] = useState<'withinYear' | 'betweenYears' | 'crossSegment'>('betweenYears');

    const analysisKey = analysisType + "-analysis";

    const handleToggleChange = useCallback((includeDecember: boolean) => {
        setIncludeDecember(includeDecember);
    }, []);

    useEffect(() => {
        setIsWithinYearLoading(true);
        setIsBtwYearLoading(true);
        setIsCrossSegmentLoading(true);

        // Reset selections when analysis type changes
        setMenuSelectedOptions([]);
        setCrossSegmentSelectedOptions([[]]);
        setIncludeDecember(true);
        window.scrollTo(0, 0);
    }, [analysisType]);

    const handleProfileRemove = useCallback((IRemoveIndex: number) => {
        setCrossSegmentSelectedOptions(prevOptions => prevOptions.filter((_, index) => index !== IRemoveIndex));
    }, []);

    const handleMenuOptionChange = useCallback((options: Option[] | Option[][]) => {
        if (Array.isArray(options[0])) {
            setCrossSegmentSelectedOptions(options as Option[][]);
        } else {
            setMenuSelectedOptions(options as Option[]);
        }
    }, []);

    return (
        <>
            <NavBar key={analysisKey} />
            {(isWithinYearLoading || isBtwYearLoading || isCrossSegmentLoading) && <LoadingOverlay />}
            <div className="home" style={{ backgroundColor: '#f5f5f5', padding: '30px 20px 20px' }}>
                {analysisType === 'betweenYears' && (
                    <BivariateAnalysis
                        key={analysisKey}
                        menuSelectedOptions={menuSelectedOptions}
                        toggleState={includeDecemberToggle}
                        setIsBtwYearLoading={setIsBtwYearLoading}
                    />
                )}
            </div>
        </>
    );
}

export default Bivariate;
