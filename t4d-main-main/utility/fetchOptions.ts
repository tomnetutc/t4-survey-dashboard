// utility/fetchOptions.ts
import { Option } from '@types';

export const fetchOptions = async (): Promise<Option[]> => {
    // Replace this URL with your actual endpoint
    const response = await fetch('/api/options');
    if (!response.ok) {
        throw new Error('Failed to fetch options');
    }
    const data = await response.json();
    return data.map((item: { value: string, label: string }) => ({
        value: item.value,
        label: item.label,
    }));
};
 