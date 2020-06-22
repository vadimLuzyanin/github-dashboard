import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useDebounce } from "./hooks/useDebounce";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const SearchBar = styled.input`
  height: 2rem;
  padding-left: 1rem;
  background-color: #86bbd8;
  color: #2f4858;
  width: 100%;
  &::placeholder {
    color: #2f4858;
    opacity: 0.8;
  }
  margin: 1rem 0;
`;

const ReposList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 75vh;
`;

const Repo = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 1.5rem;
  background-color: #2f4858;
  margin: 1rem 0;
`;

const RepoTitle = styled.div`
  font-size: 2rem;
  color: #f26419;
  cursor: pointer;
  text-decoration: underline;
`;

const GithubLink = styled.a`
  color: #86bbd8;
`;

const Pagination = styled.div`
  text-align: center;
`;

const PaginationButton = styled.span`
  display: inline-block;
  background-color: ${(props) => (props.isCurrentPage ? "#f6ae2d" : "#86bbd8")};
  color: #33658a;
  font-size: 2rem;
  width: 2rem;
  text-align: center;
  margin: 0.5rem;
  cursor: pointer;
`;

const MainView = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [repos, setRepos] = useState([]);
  const [pages, setPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') || 1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const debouncedQueryValue = useDebounce(query, 300);

  useEffect(() => {
    const q = `https://api.github.com/search/repositories?q=${
      debouncedQueryValue || "stars:>0"
    }&sort=stars&order=desc&per_page=10&page=${currentPage}`;
    setLoading(true);
    fetch(q, {
      headers: {
        Authorization: "token ecb3455da3aab928cd06a9e8bfab728f8882a1c7",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError(true);
        }
        return res.json();
      })
      .then((res) => {
        let reposList = res.items.map((repo) => {
          const lastCommitDate = new Date(repo.updated_at);
          const lastCommitDateString = `${lastCommitDate.getDate()}.${lastCommitDate.getMonth()}.${lastCommitDate.getFullYear()} ${lastCommitDate.getHours()}:${lastCommitDate.getMinutes()}`;
          return (
            <Repo key={repo.id}>
              <Link to={`${process.env.PUBLIC_URL}/repos/${repo.id}`}>
                <RepoTitle>{repo.name}</RepoTitle>
              </Link>
              <br></br>
              Stars: {repo.stargazers_count}
              <br></br>
              Last commit: {lastCommitDateString}
              <br></br>
              <GithubLink href={repo.svn_url}>Github link</GithubLink>
            </Repo>
          );
        });
        setRepos(reposList);
        let pagesCount = Math.ceil(res.total_count / 10);
        if (pagesCount > 10) {
          pagesCount = 10;
        }
        setPages(pagesCount);
        setLoading(false);

        localStorage.setItem('query', debouncedQueryValue)
        localStorage.setItem('page', currentPage)
      });
  }, [debouncedQueryValue, currentPage]);
  return (
    <Fragment>
      <SearchBar
        onChange={(e) => {
          setCurrentPage(1);
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Enter text for a search"
      />
      <ReposList>
        {error ? (
          <div>Error</div>
        ) : loading ? (
          <Loader></Loader>
        ) : (
          <div>{repos}</div>
        )}
      </ReposList>
      <Pagination>
        {[...Array(pages)].map((pageN, idx) => (
          <PaginationButton
            key={"page" + idx + 1}
            onClick={() => setCurrentPage(idx + 1)}
            isCurrentPage={idx + 1 === currentPage}
          >
            {idx + 1}
          </PaginationButton>
        ))}
      </Pagination>
    </Fragment>
  );
};

export default MainView;
