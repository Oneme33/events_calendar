import React from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onSearch: (searchTerm: string) => void;
}

interface State {
  searchTerm: string;
}

export class SearchEvents extends React.Component<Props, State> {
  state = {
    searchTerm: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label="Search for events"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchEvents;