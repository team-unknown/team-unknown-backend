const humanFormat = require('human-format');

function withdrawalNotificationContent(
  { distance, amount },
  { language = 'en' }
) {
  const humanReadableDistance = humanFormat(distance, { unit: 'm' });
  switch (language) {
    case 'en':
      return `A taker within ${humanReadableDistance} wants to withdraw ${amount} TL.`;
    case 'tr':
      return `${humanReadableDistance} uzaklikta, ${amount} TL tutarinda islem icin onayiniz bekleniyor.`;
  }
}

function confirmWithdrawalNotificationContent({ amount }, { language = 'en' }) {
  switch (language) {
    case 'en':
      return `A maker has confirmed your withdrawal request of ${amount} TL \
      and they're on their way. Click here to see real-time location updates from the maker.`;
    case 'tr':
      return `${amount} TL tutarinda isleminizi bir kullanici onayladi ve yola cikti. \
      Gercek zamanli takip icin tiklayin.`;
  }
}

function approveWithdrawalCompletionContent({ amount }, { language = 'en' }) {
  switch (language) {
    case 'en':
      return `A maker has confirmed your withdrawal operation of ${amount} TL. \
      Please approve and rate the maker to complete the transaction.`;
    case 'tr':
      return `${amount} TL tutarinda isleminiz tamamlandi. Lutfen islemi onaylayin ve \
      kullaniciyi puanlayin.`;
  }
}

module.exports = {
  withdrawalNotificationContent,
  confirmWithdrawalNotificationContent,
  approveWithdrawalCompletionContent,
};
