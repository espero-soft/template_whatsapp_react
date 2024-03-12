import Peer from 'peerjs'

export const initPeer = (userId: string): Peer | null => {
  try {
    const newPeer = new Peer(userId, /*{
      host: 'localhost',
      port: 8080,
    }*/)
    return newPeer
  } catch (error) {
    console.error("Erreur lors de l'initialisation de PeerJS :", error)
    return null
  }
}

export const connectToPeer = (peer: Peer, targetUserId: string) => {
  const connection = peer.connect(targetUserId)
  // console.log({targetUserId, connection});
  connection.on('open', () => {
    // La connexion est ouverte, vous pouvez commencer à échanger des données
    console.log('Connexion ouverte avec', targetUserId)
  })

  connection.on('data', (data) => {
    // Logique pour traiter les données reçues
    console.log('Données reçues :', data)
  })
}
