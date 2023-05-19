import React from "react"
import { IconProps } from ".."

const IconCreditCardSolid: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.97603 3.37305C3.33696 3.37305 2.72406 3.62692 2.27217 4.07881C1.82028 4.5307 1.56641 5.1436 1.56641 5.78267V6.38508H18.4338V5.78267C18.4338 5.1436 18.1799 4.5307 17.728 4.07881C17.2761 3.62692 16.6632 3.37305 16.0241 3.37305H3.97603Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.4338 8.19336H1.56641V14.2174C1.56641 14.8565 1.82028 15.4694 2.27217 15.9213C2.72406 16.3732 3.33696 16.627 3.97603 16.627H16.0241C16.6632 16.627 17.2761 16.3732 17.728 15.9213C18.1799 15.4694 18.4338 14.8565 18.4338 14.2174V8.19336ZM3.97603 11.2054C3.97603 11.0456 4.0395 10.8924 4.15247 10.7794C4.26544 10.6665 4.41867 10.603 4.57844 10.603H9.39768C9.55745 10.603 9.71068 10.6665 9.82365 10.7794C9.93662 10.8924 10.0001 11.0456 10.0001 11.2054C10.0001 11.3652 9.93662 11.5184 9.82365 11.6314C9.71068 11.7443 9.55745 11.8078 9.39768 11.8078H4.57844C4.41867 11.8078 4.26544 11.7443 4.15247 11.6314C4.0395 11.5184 3.97603 11.3652 3.97603 11.2054ZM4.57844 13.0126C4.41867 13.0126 4.26544 13.0761 4.15247 13.189C4.0395 13.302 3.97603 13.4552 3.97603 13.615C3.97603 13.7748 4.0395 13.928 4.15247 14.041C4.26544 14.154 4.41867 14.2174 4.57844 14.2174H6.98806C7.14783 14.2174 7.30105 14.154 7.41402 14.041C7.527 13.928 7.59047 13.7748 7.59047 13.615C7.59047 13.4552 7.527 13.302 7.41402 13.189C7.30105 13.0761 7.14783 13.0126 6.98806 13.0126H4.57844Z"
        className={
          iconColorClassName ||
          "tw-fill-medusa-icon-secondary dark:tw-fill-medusa-icon-secondary-dark"
        }
      />
    </svg>
  )
}

export default IconCreditCardSolid
