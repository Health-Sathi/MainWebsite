import { redirect } from 'next/navigation';
 
export default function ContactRedirect() {
  redirect('/contact-us');
  return null;
} 