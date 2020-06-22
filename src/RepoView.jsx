import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const RepositoryPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  min-height: 75vh;
  background-color: #2f4858;
  margin-top: 1rem;
`;

const RepositoryPageTitle = styled.div`
  font-size: 2rem;
  color: #f26419;
  text-align: center;
  padding: 2rem;
`;

const RepositoryPageHeader = styled.span`
  font-size: 2rem;
  color: #f26419;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 360px;
`;

const Description = styled.div`
  padding: 1rem;
`;

const RepoView = () => {
  const [currentLoading, setCurrentLoading] = useState(false);
  const [currentRepo, setCurrentRepo] = useState(null);
  const [mostActiveContributors, setMostActiveContributors] = useState([]);
  const [currentError, setCurrentError] = useState(false);

  const params = useParams();
  const currentRepoId = params.currentRepoId;

  useEffect(() => {
    const q = `https://api.github.com/repositories/${currentRepoId}`;
    setCurrentLoading(true);
    fetch(q, {
      headers: {
        Authorization: "token ecb3455da3aab928cd06a9e8bfab728f8882a1c7",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setCurrentError(true);
          return;
        }
        return res.json();
      })
      .then((res) => {
        setCurrentRepo(res);
        setCurrentLoading(false);
        if (res) {
          fetch(res.contributors_url, {
            headers: {
              Authorization: "token ecb3455da3aab928cd06a9e8bfab728f8882a1c7",
            },
          })
            .then((resC) => {
              if (!resC.ok) {
                setCurrentError(true);
                return;
              }
              return resC.json();
            })
            .then((resC) => setMostActiveContributors(resC));
        }
      });
  }, [currentRepoId]);

  let lastCommitDate;
  let lastCommitDateString;

  if (currentRepo) {
    lastCommitDate = new Date(currentRepo.updated_at);
    lastCommitDateString = `${lastCommitDate.getDate()}.${lastCommitDate.getMonth()}.${lastCommitDate.getFullYear()} ${lastCommitDate.getHours()}:${lastCommitDate.getMinutes()}`;
  }

  return (
      <RepositoryPage>
        {currentError ? (
          <div>Error</div>
        ) : currentLoading ? (
          <Loader />
        ) : (
          currentRepo && (
            <Fragment>
              <RepositoryPageTitle>{currentRepo.name}</RepositoryPageTitle>
              <div>
                <RepositoryPageHeader>Nickname:</RepositoryPageHeader>{" "}
                {currentRepo.owner.login}
              </div>
              <ProfileImage
                src={currentRepo.owner.avatar_url}
                alt="profile pic"
              ></ProfileImage>
              <br></br>
              <div>
                <RepositoryPageHeader>Stars:</RepositoryPageHeader>{" "}
                {currentRepo.stargazers_count}
              </div>
              <br></br>
              <div>
                <RepositoryPageHeader>Last commit:</RepositoryPageHeader>{" "}
                {lastCommitDateString}
              </div>
              <br></br>
              <div>
                <RepositoryPageHeader>Languages list:</RepositoryPageHeader>{" "}
                {currentRepo.language}
              </div>
              <br></br>
              <RepositoryPageHeader>
                Most active contributors:
              </RepositoryPageHeader>
              <ul>
                {mostActiveContributors.slice(0, 10).map((contributor) => (
                  <li key={contributor.id}>{contributor.login}</li>
                ))}
              </ul>
              <br></br>
              <RepositoryPageHeader>Description:</RepositoryPageHeader>{" "}
              <Description>{currentRepo.description}</Description>
            </Fragment>
          )
        )}
      </RepositoryPage>
  );
};

export default RepoView;
