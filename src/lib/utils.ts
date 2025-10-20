import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for US numbers - ai generated 🎉
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const formatPhoneNumberSenegal = (value: string) => {
  if (!value) return value;

  // Supprime tous les caractères non numériques
  // Gère aussi le "+" si présent initialement
  let phoneNumber = value.replace(/[^\d+]/g, "");

  // Supprime le préfixe "+221" s'il est déjà présent pour ne garder que les 9 chiffres
  if (phoneNumber.startsWith("+221")) {
    phoneNumber = phoneNumber.slice(4); // Supprime "+221"
  } else if (phoneNumber.startsWith("221") && phoneNumber.length > 9) {
    // Si l'utilisateur a entré "221XXXXXXXXX" sans le "+"
    phoneNumber = phoneNumber.slice(3); // Supprime "221"
  }


  const phoneNumberLength = phoneNumber.length;

  // Si le numéro a moins de 9 chiffres (il n'est pas complet), le retourner tel quel
  if (phoneNumberLength < 9) {
    return phoneNumber; // Peut-être ajouter un "+221 " devant si vous voulez montrer le préfixe partiel
  }

  // Si le numéro a exactement 9 chiffres (format sénégalais standard)
  if (phoneNumberLength === 9) {
    // Pour l'exemple, utilisons +221 XX YYY ZZ ZZ
    return `+221 ${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`;
  }

  // Si le numéro est plus long que 9 chiffres (cas rare, ou erreur de saisie, ou inclut un autre préfixe)
  // On prendra les 9 premiers chiffres significatifs
  return `+221 ${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`;
};

export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 7; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return dates;
};


export const getAvailableTimeSlots = () => {
  return [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30"
  ];
};


export const APPOINTMENT_TYPES = [
  { id: "checkup", name: "Regular Checkup", duration: "60 min", price: "$120" },
  { id: "cleaning", name: "Teeth Cleaning", duration: "45 min", price: "$90" },
  { id: "consultation", name: "Consultation", duration: "30 min", price: "$75" },
  { id: "emergency", name: "Emergency Visit", duration: "30 min", price: "$150" },
];