import HeaderMain from '@/components/Header/HeaderMain';
import Main from '@/components/Main/Main';
import Rating from '@/components/Rating/Rating';
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/rating')({
  component: Page
});

function Page() {
  return (
    <Fragment>
      <HeaderMain
        title='Rank'
        subtitle='Get into the top 10 weekly and get slopy'
      />
      <Main>
        <Rating />
      </Main>
    </Fragment>
  )
}