import { api } from "../lib/axios"

type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]


export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await api.get('/pending-goals')
  const data = await response.data

  return data.pendingGoals
}