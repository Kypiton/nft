export function calculateTimeRemaining(endTime: number): { hours: string; minutes: string; seconds: string } {
    const now = new Date().getTime();
    const timeLeft = endTime - now;
  
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
  
    return { hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds };
}
  