import { Typography } from '@mui/material'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Typography variant="h1">whale-code-test</Typography>
      </Link>
    </header>
  )
}
