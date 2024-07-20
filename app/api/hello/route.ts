// import { db, products } from 'lib/db';

export const dynamic = 'force-dynamic'

export async function GET() {
  return Response.json({
    message: 'Hello world',
  })
}
