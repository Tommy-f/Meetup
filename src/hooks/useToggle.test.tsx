import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";


test('should be defined', () => {
  expect(useToggle).toBeDefined();
})

test('should default to false', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBe(false);
})

test('should set args as initial state when providing it to the useToggle(arg)', () => {
  let { result } = renderHook(() => useToggle());
  expect(result.current[0]).toBe(false);

  result = renderHook(() => useToggle(true)).result;
  expect(result.current[0]).toBe(true);

  result = renderHook(() => useToggle(false)).result;
  expect(result.current[0]).toBe(false);
})

test('should change state to the opposite when toggle is called', () => {
  const { result } = renderHook(() => useToggle());
  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(true);

  act(() => {
    result.current[1]();
  });
  expect(result.current[0]).toBe(false);
});

