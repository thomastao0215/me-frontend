import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MetaEtopia - A role-development game based on the Binance Smart Chain (BSC)',
  description: 'MetaEtopia - A role-development game based on the Binance Smart Chain (BSC)',
  image: 'https://mvscoin.org/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  // if (path.startsWith('/swap')) {
  //   basePath = '/swap'
  // } else if (path.startsWith('/add')) {
  //   basePath = '/add'
  // } else if (path.startsWith('/remove')) {
  //   basePath = '/remove'
  // }
  // else if (path.startsWith('/nfts/collections')) {
  //   basePath = '/nfts/collections'
  // }
  let basePath
  if (path.startsWith('/nfts/bag')) {
    basePath = '/nfts/bag'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ETOP')}`,
      }
    case '/nft-pool':
      return {
        title: `${t('ETOP Pool')} | ${t('ETOP')}`,
      }
    case '/nft-museum':
      return {
        title: `${t('NFT Museum')} | ${t('ETOP')}`,
      }
    case '/nfts':
      return {
        title: `${t('NFT Market')} | ${t('ETOP')}`,
      }
    case '/nfts/bag':
      return {
        title: `${t('Your Nfts')} | ${t('ETOP')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('ETOP')}`,
      }
    // case '/swap':
    //   return {
    //     title: `${t('Exchange')} | ${t('PancakeSwap')}`,
    //   }
    // case '/add':
    //   return {
    //     title: `${t('Add Liquidity')} | ${t('PancakeSwap')}`,
    //   }
    // case '/remove':
    //   return {
    //     title: `${t('Remove Liquidity')} | ${t('PancakeSwap')}`,
    //   }
    // case '/liquidity':
    //   return {
    //     title: `${t('Liquidity')} | ${t('PancakeSwap')}`,
    //   }
    // case '/find':
    //   return {
    //     title: `${t('Import Pool')} | ${t('PancakeSwap')}`,
    //   }
    default:
      return null
  }
}
