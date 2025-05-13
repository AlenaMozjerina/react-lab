import { ContactType } from './App';

export default function Contact({
  contact,
  showEmail,
  onToggleEmail
}: {
  contact: ContactType;
  showEmail: boolean;
  onToggleEmail: () => void;
}) {
  return (
    <>
      <p><b>{contact.name}</b></p>
      {showEmail && <p><i>{contact.email}</i></p>}
      <button onClick={onToggleEmail}>
        {showEmail ? 'Hide' : 'Show'} email
      </button>
    </>
  );
}