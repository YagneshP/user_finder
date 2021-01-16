import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
const SearchForm = () => {
	return (
		<Form inline >
			<FormControl type="text" placeholder="Search"  className="mr-sm-2" />
			<Button variant="secondary">Search</Button>
		</Form>
	);
};

export default SearchForm;
