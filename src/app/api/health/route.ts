import { NextResponse } from 'next/server'
import { env } from '../../../utils/env'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const startTime = Date.now()

        // Test connection to Strapi backend
        const response = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/api/cvs`, {
            headers: {
                Authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
            },
            signal: AbortSignal.timeout(5000) // 5 second timeout
        })

        const backendResponseTime = Date.now() - startTime

        if (!response.ok) {
            throw new Error(`Backend returned status ${response.status}`)
        }

        return NextResponse.json(
            {
                status: 'ok',
                backend: 'connected',
                backendResponseTime: `${backendResponseTime}ms`,
                timestamp: new Date().toISOString()
            },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json(
            {
                status: 'error',
                backend: 'disconnected',
                error: error instanceof Error ? error.message : 'Unknown error',
                timestamp: new Date().toISOString()
            },
            { status: 503 }
        )
    }
}
