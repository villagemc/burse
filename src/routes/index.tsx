import Earn from '@/components/Earn/Earn';
import HeaderHome from '@/components/Header/HeaderHome';
import Main from '@/components/Main/Main';
import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react/jsx-runtime';

export const Route = createFileRoute('/')({
  component: Page
});

function Page() {
  return (
    <Fragment>
      <HeaderHome />
      <Main>
        <Earn />
      </Main>
    </Fragment>
  )
}