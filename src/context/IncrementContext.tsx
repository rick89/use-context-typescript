import React, { ReactNode, createContext, useState } from 'react';
import { IncrementContextType } from '../@types/increment';

export const IncrementContext = createContext<IncrementContextType | null>(
	null
);

export const IncrementProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [value, setValue] = useState<number>(0);

	const increment = () => {
		setValue((previousValue) => previousValue + 1);
	};

	const decrement = () => {
		setValue((previousValue) => previousValue - 1);
	};

	return (
		<IncrementContext.Provider value={{ increment, decrement, value }}>
			{children}
		</IncrementContext.Provider>
	);
};
