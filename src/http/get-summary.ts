import { api } from "../lib/axios"

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<string, {
    id: string,
    title: string
    completedAt: string
  }[]>
}


export async function getSummary(): Promise<SummaryResponse> {
  const response = await api.get('/summary')
  const data = await response.data

  return data.summary
}