import { createContext, useContext, type ReactNode } from "react";

export type ConsultationModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const ConsultationModalContext = createContext<ConsultationModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useConsultationModal() {
  return useContext(ConsultationModalContext);
}
