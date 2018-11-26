import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
// import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete';

const styles = {
  autocompleteContainer: {
    zIndex: 1000
  }
};

class PlaceInput extends Component {
  state = {
    scriptLoaded: true
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: { touched, error }
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        {/*<Script
          url="https://maps.googleapis.com/maps/api/js?&key=AIzaSyBE37NT1YgBbMCvFKbOheaO3tNWQLF-MKM&libraries=places"
          onLoad={this.handleScriptLoaded}
        />*/}
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            inputProps={{ ...input, placeholder }}
            options={options}
            onSelect={onSelect}
            styles={styles}
          />
        )}
        {touched && error && (
          <div style={{ margin: '10px auto' }}>
            <Label basic color="red">
              {error}
            </Label>
          </div>
        )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
