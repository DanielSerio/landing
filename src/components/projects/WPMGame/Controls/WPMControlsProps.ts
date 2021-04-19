export default interface WPMControlsProps {
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
}