'use client';

import React, { useState, useCallback, useEffect } from 'react';
import "@components/univariate.scss";
import { useDocumentTitle } from '@utility';
import { NavBar, Footer, LoadingOverlay, Option } from "@components";
import UnivariateAnalysis from '@components/Univariate';

export function Univariate(): JSX.Element {
    const [menuSelectedOptions, setMenuSelectedOptions] = useState<Option[]>([]);
    const [crossSegmentSelectedOptions, setCrossSegmentSelectedOptions] = useState<Option[][]>([[]]);
    const [includeDecemberToggle, setIncludeDecember] = useState(true);

    const handleToggleChange = useCallback((includeDecember: boolean) => {
        setIncludeDecember(includeDecember);
    }, []);

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
            <NavBar />
            <div className="home" style={{ backgroundColor: '#f5f5f5', padding: '30px 20px 20px' }}>
                <UnivariateAnalysis
                    menuSelectedOptions={menuSelectedOptions}
                    toggleState={includeDecemberToggle}
                    setIsBtwYearLoading={() => {}}
                />
            </div>
        </>
    );
}

export default Univariate;
