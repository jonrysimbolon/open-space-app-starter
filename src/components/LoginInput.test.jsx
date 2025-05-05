import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';
import matchers from '@testing-library/jest-dom/matchers';

/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Username');

    await userEvent.type(usernameInput, 'usernametest');

    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'usernametest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput,'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.click(loginButton);

    expect(mockLogin).toBeCalledWith({
      id: 'usernametest',
      password: 'passwordtest',
    });
  });
});