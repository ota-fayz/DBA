import type { ChangeEvent, ReactNode } from 'react'

export interface ContainerProps {
  border?: boolean;
  children: ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: ReactNode;
  onClick?: () => void;
}

export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (
    event:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
export interface validateProps {
  name: string;
  message: string;
  email: string;
  phone: string;
}
