 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Clock, Scissors, Sparkles, CreditCard, Smartphone, Banknote, Calendar, User } from "lucide-react";
 import { useNavigate } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 
 // Service data
 const services = [
   { id: 1, name: "Haarschnitt", price: "ab CHF 45", duration: "30 min", icon: Scissors },
   { id: 2, name: "Fade & Style", price: "ab CHF 55", duration: "45 min", icon: Sparkles },
   { id: 3, name: "Bartpflege", price: "ab CHF 35", duration: "30 min", icon: Scissors },
 ];
 
// Barbers
const barbers = [
  { id: 1, name: "Ahmad", specialty: "Fade & Styling Experte" },
  { id: 2, name: "Musa", specialty: "Klassische Haarschnitte" },
  { id: 3, name: "Rodi", specialty: "Bartpflege Spezialist" },
];

 // Mock time slots
 const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];
 
 // Generate mock week dates
 const generateWeekDates = () => {
   const dates = [];
   const today = new Date();
   for (let i = 0; i < 7; i++) {
     const date = new Date(today);
     date.setDate(today.getDate() + i);
     dates.push(date);
   }
   return dates;
 };
 
 const weekDates = generateWeekDates();
 
 const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
 
 const paymentMethods = [
   { id: "card", name: "Kreditkarte", icon: CreditCard },
   { id: "apple", name: "Apple Pay", icon: Smartphone },
   { id: "cash", name: "Barzahlung vor Ort", icon: Banknote },
 ];
 
 const Booking = () => {
   const navigate = useNavigate();
   const [step, setStep] = useState(1);
   const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<typeof barbers[0] | null>(null);
   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
   const [selectedTime, setSelectedTime] = useState<string | null>(null);
   const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
   const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     phone: "",
     email: "",
   });
 
   const handleNext = () => {
    if (step < 6) setStep(step + 1);
   };
 
   const handleBack = () => {
     if (step > 1) setStep(step - 1);
     else navigate("/");
   };
 
   const formatDate = (date: Date) => {
     return date.toLocaleDateString("de-CH", { weekday: "long", day: "numeric", month: "long" });
   };
 
   const canProceed = () => {
     switch (step) {
      case 1: return selectedBarber !== null;
      case 2: return selectedService !== null;
      case 3: return selectedDate !== null && selectedTime !== null;
      case 4: return formData.firstName && formData.lastName && formData.phone && formData.email;
      case 5: return selectedPayment !== null;
       default: return true;
     }
   };
 
   const stepVariants = {
     initial: { opacity: 0, x: 20 },
     animate: { opacity: 1, x: 0 },
     exit: { opacity: 0, x: -20 },
   };
 
   return (
     <div className="min-h-screen bg-background">
       {/* Header */}
       <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
         <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
           <button
             onClick={handleBack}
             className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
           >
             <ArrowLeft className="w-5 h-5" />
           </button>
           <div className="flex-1">
             <h1 className="font-display text-xl font-semibold">Termin buchen</h1>
              <p className="text-sm text-muted-foreground">Schritt {step} von 6</p>
           </div>
         </div>
         
         {/* Progress bar */}
         <div className="h-1 bg-muted">
           <motion.div
             className="h-full bg-gold"
             initial={{ width: "0%" }}
              animate={{ width: `${(step / 6) * 100}%` }}
             transition={{ duration: 0.3 }}
           />
         </div>
       </header>
 
       {/* Content */}
       <main className="max-w-3xl mx-auto px-6 py-8">
         <AnimatePresence mode="wait">
            {/* Step 1: Barber Selection */}
           {step === 1 && (
             <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Barber wählen</h2>
                <p className="text-muted-foreground mb-8">Wähle deinen bevorzugten Barber</p>
               
               <div className="space-y-4">
                  {barbers.map((barber) => (
                   <button
                      key={barber.id}
                      onClick={() => setSelectedBarber(barber)}
                     className={`w-full p-6 rounded-lg border transition-all duration-300 text-left flex items-center gap-4 ${
                        selectedBarber?.id === barber.id
                         ? "border-gold bg-gold/10"
                         : "border-border hover:border-gold/50 bg-card"
                     }`}
                   >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        selectedBarber?.id === barber.id ? "bg-gold text-background" : "bg-muted text-gold"
                     }`}>
                        <User className="w-7 h-7" />
                     </div>
                     <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold">{barber.name}</h3>
                        <p className="text-muted-foreground text-sm">{barber.specialty}</p>
                     </div>
                      {selectedBarber?.id === barber.id && (
                       <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                         <Check className="w-4 h-4 text-background" />
                       </div>
                     )}
                   </button>
                 ))}
               </div>
             </motion.div>
           )}
 
            {/* Step 2: Service Selection */}
           {step === 2 && (
             <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Service wählen</h2>
                <p className="text-muted-foreground mb-8">Wähle deinen gewünschten Service</p>
                
                <div className="space-y-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`w-full p-6 rounded-lg border transition-all duration-300 text-left flex items-center gap-4 ${
                        selectedService?.id === service.id
                          ? "border-gold bg-gold/10"
                          : "border-border hover:border-gold/50 bg-card"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedService?.id === service.id ? "bg-gold text-background" : "bg-muted text-gold"
                      }`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg font-medium">{service.name}</h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {service.duration}
                        </p>
                      </div>
                      <div className="text-gold font-semibold">{service.price}</div>
                      {selectedService?.id === service.id && (
                        <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                          <Check className="w-4 h-4 text-background" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
               <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Datum & Zeit</h2>
               <p className="text-muted-foreground mb-8">Wähle deinen Wunschtermin</p>
               
               {/* Date Selection */}
               <div className="mb-8">
                 <h3 className="font-medium mb-4 flex items-center gap-2">
                   <Calendar className="w-5 h-5 text-gold" /> Datum wählen
                 </h3>
                 <div className="grid grid-cols-7 gap-2">
                   {weekDates.map((date, index) => (
                     <button
                       key={index}
                       onClick={() => setSelectedDate(date)}
                       className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                         selectedDate?.toDateString() === date.toDateString()
                           ? "border-gold bg-gold/10"
                           : "border-border hover:border-gold/50 bg-card"
                       }`}
                     >
                       <div className="text-xs text-muted-foreground">{dayNames[date.getDay()]}</div>
                       <div className="font-semibold text-lg">{date.getDate()}</div>
                     </button>
                   ))}
                 </div>
               </div>
               
               {/* Time Selection */}
               {selectedDate && (
                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                   <h3 className="font-medium mb-4 flex items-center gap-2">
                     <Clock className="w-5 h-5 text-gold" /> Zeit wählen
                   </h3>
                   <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                     {timeSlots.map((time) => (
                       <button
                         key={time}
                         onClick={() => setSelectedTime(time)}
                         className={`py-3 px-4 rounded-lg border text-center transition-all duration-300 ${
                           selectedTime === time
                             ? "border-gold bg-gold text-background font-semibold"
                             : "border-border hover:border-gold/50 bg-card"
                         }`}
                       >
                         {time}
                       </button>
                     ))}
                   </div>
                 </motion.div>
               )}
             </motion.div>
           )}
 
            {/* Step 4: Customer Details */}
            {step === 4 && (
              <motion.div key="step4" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
               <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Deine Daten</h2>
               <p className="text-muted-foreground mb-8">Bitte fülle deine Kontaktdaten aus</p>
               
               <div className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="firstName">Vorname</Label>
                     <Input
                       id="firstName"
                       value={formData.firstName}
                       onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                       placeholder="Max"
                       className="bg-card border-border focus:border-gold"
                     />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="lastName">Nachname</Label>
                     <Input
                       id="lastName"
                       value={formData.lastName}
                       onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                       placeholder="Mustermann"
                       className="bg-card border-border focus:border-gold"
                     />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="phone">Telefonnummer</Label>
                   <Input
                     id="phone"
                     type="tel"
                     value={formData.phone}
                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                     placeholder="+41 79 123 45 67"
                     className="bg-card border-border focus:border-gold"
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email">E-Mail</Label>
                   <Input
                     id="email"
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     placeholder="max@beispiel.ch"
                     className="bg-card border-border focus:border-gold"
                   />
                 </div>
               </div>
             </motion.div>
           )}
 
            {/* Step 5: Payment */}
            {step === 5 && (
              <motion.div key="step5" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
               <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">Zahlung</h2>
               <p className="text-muted-foreground mb-8">Wähle deine bevorzugte Zahlungsmethode</p>
               
               <div className="space-y-4">
                 {paymentMethods.map((method) => (
                   <button
                     key={method.id}
                     onClick={() => setSelectedPayment(method.id)}
                     className={`w-full p-5 rounded-lg border transition-all duration-300 text-left flex items-center gap-4 ${
                       selectedPayment === method.id
                         ? "border-gold bg-gold/10"
                         : "border-border hover:border-gold/50 bg-card"
                     }`}
                   >
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                       selectedPayment === method.id ? "bg-gold text-background" : "bg-muted text-gold"
                     }`}>
                       <method.icon className="w-6 h-6" />
                     </div>
                     <span className="font-medium flex-1">{method.name}</span>
                     {selectedPayment === method.id && (
                       <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                         <Check className="w-4 h-4 text-background" />
                       </div>
                     )}
                   </button>
                 ))}
               </div>
               
               <p className="text-xs text-muted-foreground mt-6 text-center">
                 Dies ist eine Vorschau. Es wird keine echte Zahlung durchgeführt.
               </p>
             </motion.div>
           )}
 
            {/* Step 6: Confirmation */}
            {step === 6 && (
              <motion.div key="step6" variants={stepVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }} className="text-center">
               <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                 className="w-20 h-20 rounded-full bg-gold mx-auto mb-6 flex items-center justify-center"
               >
                 <Check className="w-10 h-10 text-background" />
               </motion.div>
               
               <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                 Termin erfolgreich gebucht!
               </h2>
               
               <div className="bg-card border border-border rounded-lg p-6 mt-8 text-left max-w-md mx-auto">
                 <h3 className="font-display text-lg font-semibold text-gold mb-4">Deine Buchung</h3>
                 <div className="space-y-3 text-sm">
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Service</span>
                     <span className="font-medium">{selectedService?.name}</span>
                   </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Barber</span>
                      <span className="font-medium">{selectedBarber?.name}</span>
                    </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Datum</span>
                     <span className="font-medium">{selectedDate && formatDate(selectedDate)}</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Zeit</span>
                     <span className="font-medium">{selectedTime} Uhr</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-muted-foreground">Preis</span>
                     <span className="font-medium text-gold">{selectedService?.price}</span>
                   </div>
                   <hr className="border-border my-4" />
                   <div>
                     <span className="text-muted-foreground block mb-1">Adresse</span>
                     <span className="font-medium">
                       Coiffeur Styl<br />
                       Albisstrasse 110<br />
                       8038 Zürich Wollishofen
                     </span>
                   </div>
                 </div>
               </div>
               
               <p className="text-sm text-muted-foreground mt-8 max-w-md mx-auto">
                 Dies ist eine Vorschau. Die finale Buchung wird später über Fresha abgewickelt.
               </p>
               
               <Button
                 onClick={() => navigate("/")}
                 className="mt-8 btn-hero-primary"
               >
                 Zurück zur Startseite
               </Button>
             </motion.div>
           )}
         </AnimatePresence>
       </main>
 
       {/* Footer CTA */}
        {step < 6 && (
         <footer className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4">
           <div className="max-w-3xl mx-auto">
             <Button
               onClick={handleNext}
               disabled={!canProceed()}
               className="w-full btn-hero-primary py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
             >
                {step === 4 ? "Zur Zahlung" : step === 5 ? "Termin bestätigen" : "Weiter"}
             </Button>
           </div>
         </footer>
       )}
     </div>
   );
 };
 
 export default Booking;