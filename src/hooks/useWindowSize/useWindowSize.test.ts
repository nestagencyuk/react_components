import { cleanup } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useWindowSize from './useWindowSize';

describe('useWindowSize', () => {
  afterEach(() => {
    // remove own key added in test
    delete global.window.removeEventListener;
    cleanup();
  });

  it('returns window width and size', () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(1024); // js-dom default size
    expect(result.current.height).toBe(768);
  });

  it('responds to window resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 800 });
      Object.defineProperty(window, 'innerHeight', { value: 600 });
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(800);
    expect(result.current.height).toBe(600);
  });

  it('removes event listener on clean-up', () => {
    const hook = renderHook(() => useWindowSize());
    const removeEventListener = jest.fn();
    Object.defineProperty(window, 'removeEventListener', { value: removeEventListener });

    act(() => {
      hook.unmount();
    });

    expect(removeEventListener).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
