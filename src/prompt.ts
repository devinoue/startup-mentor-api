const propmtList = [
    {
      keyword: '金融',
      idea:
        'This financial services startup is helping companies make sense of financial transaction data that lives across multiple systems.',
      japanese:
        'この金融サービスのスタートアップは、複数のシステムにまたがる金融取引データの意味を企業が理解できるように支援しています。',
    },
    {
      keyword: '住宅',
      idea:
        'An API for homes and buildings, with a hardware hub meant to help developers build apps that can do things like unlock doors, summon elevators, etc. from different device vendors.',
      japanese:
        '住宅や建物のためのAPIで、異なるデバイスベンダーからドアのロックを解除したり、エレベーターを呼び出したりすることができるアプリを開発者が構築できるようにするためのハードウェアハブを備えています。',
    },
    {
      keyword: 'ブルーカラー',
      idea:
        'A tool for hiring mechanics and electricians, pitched as "LinkedIn for skilled blue-collar workers".',
      japanese:
        '「熟練したブルーカラー労働者のためのLinkedIn」として提案された、機械工と電気技師を雇うためのツール。',
    },
    {
      keyword: '都市',
      idea:
        'A startup that indexes cities around the world and ranks them on suitability to working remotely.',
      japanese:
        '世界中の都市をインデックス化し、リモートワークに適しているかどうかでランク付けするスタートアップ。',
    },
    {
      keyword: 'Google Drive',
      idea:
        'A command line-style tool for building quick shortcut commands across things like email, Google Drive, Slack, or Asana. Available on Windows/Mac.',
      japanese:
        'Eメール、Google Drive、Slack、Asanaなどにまたがるクイックショートカットコマンドを構築するためのコマンドライン風のツール。Windows/Macで利用可能。',
    },
    {
      keyword: '銀行口座',
      idea:
        'A digital bank account for startups based in Brazil. The startup helps other online businesses get corporate cards fast and without big fees.',
      japanese:
        'ブラジルに拠点を置くスタートアップのためのデジタル銀行口座。このスタートアップは、他のオンラインビジネスが法人カードを迅速かつ高額な手数料なしで取得できるように支援しています。',
    },
    {
      keyword: 'ブートキャンプ',
      idea:
        'A startup that is a curated list of bootcamps which makes money with advertising them.',
      japanese:
        'ブートキャンプのキュレーションされたリストで、それらを広告してお金を稼ぐスタートアップ。',
    },
  ]
  
  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
  const shuffled = shuffle(propmtList)
  
  const extractNumber = 7
  const generatePrompt = () => {
    let result = ''
    for (let i = 0; i < extractNumber; i++) {
      result += `keyword: ${shuffled[i].keyword}\n` + JSON.stringify(shuffled[i]) + '\n'
    }
    return result
  }
  
  export const prompt = generatePrompt()
  