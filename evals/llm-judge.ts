/**
 * LLM Judge usando Claude Haiku para evaluaciones subjetivas
 */

import { GoogleGenAI } from '@google/genai'

// Cliente lazy - se inicializa cuando se usa, no al importar el módulo
let client: GoogleGenAI | null = null
function getClient(): GoogleGenAI {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })
  }
  return client
}

export interface JudgeResult {
  pass: boolean
  reason: string
}

/**
 * Usa Claude Haiku para evaluar si una respuesta cumple criterios subjetivos
 */
export async function judgeTone(
  response: string,
  criteria: string
): Promise<JudgeResult> {
  try {
    const result = await getClient().models.generateContent({
      model: 'gemini-2.0-flash-lite',
      contents: [
        {
          role: 'user',
          parts: [{ text: `Evalúa si esta respuesta de un chatbot cumple el criterio especificado.

Criterio: ${criteria}

Respuesta a evaluar:
"""
${response}
"""

Responde SOLO con JSON válido en este formato exacto (sin markdown):
{"pass": true, "reason": "explicación breve de por qué pasa"}
o
{"pass": false, "reason": "explicación breve de por qué no pasa"}` }],
        },
      ],
      config: { maxOutputTokens: 200 },
    })

    const text = result.text || ''

    // Limpiar posible markdown del JSON
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim()

    const parsed = JSON.parse(cleanText)
    return {
      pass: Boolean(parsed.pass),
      reason: String(parsed.reason || 'No reason provided'),
    }
  } catch (error) {
    console.error('LLM Judge error:', error)
    return {
      pass: false,
      reason: `LLM Judge error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    }
  }
}
