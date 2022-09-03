import PropTypes from "prop-types";
import React, { Component, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { TopMenuHome } from "../components/TopMenu";
import { getAllNotes } from "../utils/local-data";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";
  const updateSearchMenu = (search) => {
    setSearchParams({ search: search });
  };

  useEffect(() => {
    if (keyword === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, keyword]);

  return (
    <HomeContainer updateSearchMenu={updateSearchMenu} keyword={keyword} />
  );
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes() || [],
      keyword: "",
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });
    this.props.updateSearchMenu(keyword);
  }

  render() {
    return (
      <>
        <TopMenuHome onSearch={this.onSearch} keyword={this.state.keyword} />
        {this.state.notes.length > 0 && <NoteList notes={this.state.notes} />}
      </>
    );
  }
}

HomeContainer.propTypes = {
  updateSearchMenu: PropTypes.func.isRequired,
  keyword: PropTypes.string,
};
