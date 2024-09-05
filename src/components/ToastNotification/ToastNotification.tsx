import { FC } from 'react';
import { GreenTick } from '../../assets';

interface ToastNotificationProps {
  message?: string;
  title: string;
}

const ToastNotification: FC<ToastNotificationProps> = ({ message, title }) => {
  return (
    <div className="flex items-start gap-3">
      <GreenTick />
      <div>
        <h4 className="mb-2 font-medium text-c-neutral-700">{title}</h4>
        <span className="text-sm text-c-neutral-600">{message}</span>
      </div>
    </div>
  );
};

export default ToastNotification;
