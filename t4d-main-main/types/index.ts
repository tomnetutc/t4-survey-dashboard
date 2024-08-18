import { ChartData } from "chart.js";
import { DSVRowString } from "d3-dsv";
import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface TableDataRow {
  variable: string;
  count: number;
  share: number;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
export interface Option {
  value: string;
  label: string;
  id: string;
  val: string;
  groupId: string;
  groupName?: string;
  progressValue?: number;
};

export interface weekOption {
  value: string;
  label: string;
  id: string;
  val?: string;
  groupId?: string;
  groupName?: string;
  progressValue?: number;
};

export interface GroupedOption {
  label: string;
  options: Option[];
};

export type GroupedOptions = {
  [key: string]: Option[];
};

export interface YearOption {
  label: string;
  value: string;
};

export interface YearMenuProps {
  onSelectionChange: (selections: { week: weekOption, year: string, employment?: Option }) => void;
  callingComponent?: string;
};

export type ActivityOption = {
  label: string;
  value?: string;
  inHome: string;
  outHome: string;
};

export type ActivityLocationOption = {
  label: string;
  value: string;
}

export type TripPurposeOption = {
  label: string;
  value: string;
  numberTrip: string;
  durationTrips: string;
};

export type TravelModeOption = {
  label: string;
  value: string;
  numberTrip: string;
  durationTrips: string;
};

export type DayofWeekOption = {
  label: string;
  value: string;
  id: string;
  val: string;
  groupId: string;
};

export type DataRow = {
  [key: string]: string;

  
};

export interface YearlyActivityData {
  inHome: number;
  outHome: number;
  count: number;
};

export interface SegmentProps {
  title: string;
  counter: string;
  icon: React.ElementType;

};

export interface DonutProps {
  title: string;
  data: ChartData<"doughnut">;
  aspectRatio?: number;
};

export interface NavbarProps {
  onMenuOptionChange: (options: Option[] | Option[][]) => void;
  toggleState: (includeDecember: boolean) => void;
  analysisType: 'withinYear' | 'betweenYears' | 'crossSegment';
  onAnalysisTypeChange: (type: 'withinYear' | 'betweenYears' | 'crossSegment') => void;
  isTeleworkPage?: boolean;
  updatedCrossSegmentSelections: Option[][];
};

export interface CrossSegmentNavbarProps {
  onMenuOptionChange: (options: [Option[]]) => void;
  toggleState: (includeDecember: boolean) => void;
  analysisType: 'withinYear' | 'betweenYears' | 'crossSegment';
  onAnalysisTypeChange: (type: 'withinYear' | 'betweenYears' | 'crossSegment') => void;
  isTeleworkPage?: boolean;
};

export interface ChartDataProps {
  labels: (string | string[])[];
  datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth?: number;
      barThickness: number | 'flex';
  }[];
};

export interface BubbleComponentProps {
  value: number;
  label: string;
  color: string;
  minData: number;
  maxData: number;
  minSize: number;
  maxSize: number;
};

export interface BubbleChartProps {
  inHomeValue: number;
  outHomeValue: number;
  chartTitle: string;
};

export interface BubbleDataProps {
  value: number;
  label: string;
  color: string;
};

export interface FourBubbleChartProps {
  bubbleData: BubbleDataProps[];
  chartTitle: string;
};

export interface DualValueSegmentProps {
  title: string;
  inHomeValue: number | string;
  outOfHomeValue: number | string;
  inHomeChangeValue: number | null;
  outOfHomeChangeValue: number | null;
};

export interface ProgressBarData {
  label: string;
  percentChange: number;
  color: string;
}

export interface ProgressComponentProps {
  title: string;
  data: ProgressBarData[];
}

export interface CountObj {
  data: DSVRowString<string>[]
  count: [string | undefined, number][];
};

export interface SampleSizeTableProps {
  years: (string | undefined)[];
  counts: CountObj[];
  crossSegment?: boolean;
};

export interface FooterProps {
  docRefID: string;
  page: string;
  expiry: string;
  footerBackgroundcolor?: string; // This is for Home and About page (white background)
};

export interface ProfileObj {
  [key: string]: Option[];
};

export interface IAddProfile {
  (newProfile: { [key: string]: Option[] }): Promise<void>;
};

export interface IRemoveProfile {
  (profileIndex: number): void;
}

export interface ProfileCardProps {
  profileList: ProfileObj[];
  removeProfile: IRemoveProfile;
  title: string;
};

export type AnalysisTypeOption = {
  label: string;
  value: string;
};
export interface Variable {
  category: string;
  variable: string;
  name: string;
};
