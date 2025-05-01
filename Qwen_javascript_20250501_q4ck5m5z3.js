// Substitua pela sua PUBLIC KEY do Stripe
const stripe = Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX');

async function redirectToCheckout() {
  const response = await fetch('/create-checkout-session', {
    method: 'POST',
  });
  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    alert(result.error.message);
  }
}