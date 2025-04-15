/**
 * ReactNode is a type that represents a React node, which can be an element,
 * a string, a number, a boolean, a React fragment, null, or undefined.
 * It is used to describe the type of the children prop.
 *
 * @see https://reactjs.org/docs/react-api.html#reactnode
 */

/**
 * A prop, short for "property," is an attribute passed to a React component.
 * Props are used to pass data and event handlers down to child components,
 * allowing components to be dynamic and reusable. They are read-only
 * and should not be modified by the receiving component.
 *
 * Props are typically defined as part of a component's interface or
 * type definition to ensure type safety and clarity.
 *
 * Example:
 *
 * interface MyComponentProps {
 *   title: string;
 *   onClick: () => void;
 * }
 *
 * function MyComponent({ title, onClick }: MyComponentProps) {
 *   return <button onClick={onClick}>{title}</button>;
 * }
 */

// Children Prop
export interface RNChildProp {
  children?: React.ReactNode;
}

// Doctor Search
export interface SearchLocationProps {
  onSearch: (query: string) => void;
}

// Search Context
export interface SearchContext {
  query: string;
  setQuery: (query: string) => void;
}

// Filter Dropdown
export interface FilterDropdownProps {
  title: string;
  options: string[];
}
