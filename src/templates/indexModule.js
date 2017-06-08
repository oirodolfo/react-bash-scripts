const getTemplate = (name) => {
	const lowerCaseName = name.toLowerCase();
	return (
`import ${lowerCaseName}Reducer from './reducers/${name}Reducer';
import ${name} from './containers/${name}';

export { ${name} };
export { ${lowerCaseName}Reducer };
`
	);
};

export default getTemplate;
