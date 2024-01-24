'use client';

import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

export default function ErrorDetailPage() {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', margin: '50px 0' }}>
      <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
        Looks like this character doesn&apos;t exist
      </Typography>
      <Link href="/" passHref>
        <Button>Go back home</Button>
      </Link>
    </Container>
  );
}
