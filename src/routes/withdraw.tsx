import HeaderMain from '@/components/Header/HeaderMain'
import Main from '@/components/Main/Main'
import With from '@/components/With/With'
import { createFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

export const Route = createFileRoute('/withdraw')({
  component: Page
})

function Page() {
  return (
    <Fragment>
      <HeaderMain
        title='Conclusion'
        subtitle='Get into the top 10 weekly and get slopy'
      />
      <Main>
        <With />
      </Main>
    </Fragment>
  )
}