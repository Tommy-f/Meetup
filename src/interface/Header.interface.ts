import { ChangeEvent } from 'react';

export interface HeaderProps {
  onUserSearch?: (event: ChangeEvent<HTMLInputElement>) => void
  setSort?: () => boolean
}