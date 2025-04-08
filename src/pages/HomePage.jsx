import React, { useEffect } from 'react';
import TalkInput from '../components/TalkInput';
import TalksList from '../components/TalksList';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';
import { asyncAddTalk, asyncToogleLikeTalk } from '../states/talks/action';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const {
    talks = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk

  };

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
}

export default HomePage;
