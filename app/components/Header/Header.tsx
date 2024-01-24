import { Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Typography
          variant="h1"
          sx={{ color: yellow[400], fontWeight: 700, fontSize: '3.5rem' }}
          mb={2}
        >
          Whale The Force Be With You 🐳
        </Typography>
      </Link>
    </header>
  );
}
