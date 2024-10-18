import { Component } from "react";
import ErrorPage from "../pages/ErrorPage"; // Replace this with your custom error page

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    // Catches errors in child components
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />; // Render error page if error occurs // fallback UI
    }
    return this.props.children; // Otherwise, render the children components
  }
}
