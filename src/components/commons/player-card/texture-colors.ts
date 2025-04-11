import type { CardType } from '@/types'

interface CardTextureColors {
  background: string
  boxShadow: string
  border: string
}

export const cardTextureColors: Record<CardType, CardTextureColors> = {
  gold: {
    background:
      'linear-gradient(135deg, #f6e27a 0%, #d2ac47 50%, #edc967 100%)',
    boxShadow:
      '0 10px 20px rgba(218, 165, 32, 0.3), inset 0 -5px 10px rgba(205, 127, 50, 0.2), inset 0 5px 10px rgba(255, 255, 255, 0.2)',
    border: '1px solid #d4af37',
  },
  silver: {
    background:
      'linear-gradient(135deg, #e6e6e6 0%, #b3b3b3 50%, #cccccc 100%)',
    boxShadow:
      '0 10px 20px rgba(192, 192, 192, 0.3), inset 0 -5px 10px rgba(169, 169, 169, 0.2), inset 0 5px 10px rgba(255, 255, 255, 0.2)',
    border: '1px solid #c0c0c0',
  },
  bronze: {
    background:
      'linear-gradient(135deg, #cd7f32 0%, #a05a2c 50%, #b87333 100%)',
    boxShadow:
      '0 10px 20px rgba(184, 115, 51, 0.3), inset 0 -5px 10px rgba(139, 69, 19, 0.2), inset 0 5px 10px rgba(255, 235, 205, 0.2)',
    border: '1px solid #b87333',
  },
  professional: {
    background:
      'linear-gradient(135deg, #9c27b0 0%, #3f51b5 50%, #673ab7 100%)',
    boxShadow:
      '0 10px 20px rgba(103, 58, 183, 0.3), inset 0 -5px 10px rgba(63, 81, 181, 0.2), inset 0 5px 10px rgba(255, 255, 255, 0.2)',
    border: '1px solid #673ab7',
  },
}
