import { Button, ButtonGroup } from '@mui/material'

export default function Home() {
  return (
    <main>
      this is the landing page
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </main>
  )
}
