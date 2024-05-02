import { useContext } from 'react';
import { IncrementContext } from '../context/IncrementContext';
import { IncrementContextType } from '../@types/increment';

export const Count = () => {
	const { value, increment, decrement } = useContext(
		IncrementContext
	) as IncrementContextType;
	return (
		<div>
			<p>Value: {value}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};
