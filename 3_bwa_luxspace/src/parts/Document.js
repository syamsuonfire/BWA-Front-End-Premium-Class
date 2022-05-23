import useModalDOM from 'helpers/hooks/useModalDOM';
import useScrollAnchor from 'helpers/hooks/useScrollAnchor';
import useScrollToTop from 'helpers/hooks/useScrollToTop';

export default function Document({ children }) {
  useModalDOM();
  useScrollAnchor();
  useScrollToTop();

  return children;
}
