export default function handler(req, res) {
  var ip = req.headers['x-forwarded-for']

  if (!ip) {
    res.status(500).json({
      status: 'error',
      message: "Your ip could not be found!"
    })
    return
  }

  let url = 'http://ip-api.com/json/' + ip

  fetch(url)
  .then(res => res.json())
  .then(body => {
    const status = body['status']
    console.log(body)

    if (status != 'success') {
      res.status(500).json({
        ip: ip,
        status: 'error',
        message: 'The ip lookup could not be completed.'
      })
      return
    }

    const country = body['country']
    const region = body['regionName']
    const city = body['city']
    const isp = body['isp']

    const content = {
      ip: ip,
      status: status,
      country: country,
      region: region,
      city: city,
      isp: isp
    }

    res.status(200).json(content)
    return
  }).catch(e => {
    res.status(400).json({ 
      ip: ip,
      status: 'error',
     })
  })
}
