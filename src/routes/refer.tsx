import HeaderMain from '@/components/Header/HeaderMain';
import Main from '@/components/Main/Main';
import Refer from '@/components/Refer/Refer';
import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/refer')({
  component: Page
});

function Page() {
  return (
    <Fragment>
      <HeaderMain
        title='Invite Friends!'
        subtitle='You and your friend will receive Slopy'
      />
      <Main>
        <Refer />
      </Main>
    </Fragment>
  )
}