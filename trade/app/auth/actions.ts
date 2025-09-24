
'use server';

import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signup(credentials: any) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    return { success: true };
  } catch (error: any) {
    let errorMessage = 'An unexpected error occurred.';
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email address is already in use.';
          break;
        case 'auth/weak-password':
          errorMessage = 'The password is too weak.';
          break;
        case 'auth/invalid-email':
            errorMessage = 'Please enter a valid email address.';
            break;
        default:
          errorMessage = `An unexpected error occurred: ${error.message}`;
          break;
      }
    }
    return { error: errorMessage };
  }
}

export async function login(credentials: any) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;

    const userCookie = { uid: user.uid, email: user.email };
    cookies().set('user', JSON.stringify(userCookie), {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
    });

  } catch (error: any) {
    return { error: 'Invalid login credentials. Please try again.' };
  }
  redirect('/dashboard');
}

export async function logout() {
    try {
        await signOut(auth);
    } catch(error) {
        // Even if signout fails on firebase, we clear the cookie
        console.error("Firebase signout error:", error)
    }
    cookies().delete('user');
    redirect('/');
}
