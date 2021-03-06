const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  console.log(ctx);
  await ctx.render('amp', {
    title: '假如我是一只狗的日记 | sunnyson303 amp',
    description: '假如我是一只狗的日记, sunnyson303',
    keywords: '假如我是一只狗 Google AMP 日记',
    host: ctx.host
  })
})

router.get('/getArticle', async (ctx, next) => {
  const content =  [
    `假如我是一只小狗，我要我的样子很可爱，要有一双水汪汪的大眼睛，一个樱桃般的小嘴，一身白茸茸的皮毛。

    　　假如我是一只小狗，平时我会让我的小主人每天早上带我去花园溜一圈做健身运动，再回到家享受美味的早餐。我的早餐一定要既丰富又富有营养，而不失美味。享受完美味的早餐后，我会送我的小主人上学，然后就陪着小主人的妈妈去卖菜，准备晚餐。中午，我会回到我温暖、舒适的窝里，睡上一个午觉。大约四点钟的时候，我会在花园里，享受一个太阳浴。把我自已打扮得干干净净，漂漂亮亮的，迎接我的小主人放学。晚上，我会在客厅的沙发上与小主人一家人一起观看电视。
    
    　　为了报答小主人一家的盛情款待，我会在他们出门时，为他们看好门户，不让坏人进来。他们每次回到家，我会马上递上拖鞋，欢迎他们回家。
    
    　　多么美丽的小狗，多么温暖的家。假如我是一只小狗，我会幸福地与小主人一起茁壮成长。`
    ,
    `早上醒来的时候我发现自己多了两条腿，原来我已经是一条小狗了。我突然想起今天是我的朋友小猫的生日，于是，我穿上了衣服走向小猫家。

    　　正在这时，小猫正在准备午餐。忽然听见门外面有人在敲门小猫开门一看原来是我在敲门，于是小猫连忙说：“小狗，请进。”我连招呼也不打就大模大样走了进去，然后小猫又泡了杯茶给我，可是，我说：“我不要喝茶，我要和可乐！”说完我把杯子往地一摔。这时，小兔和老牛大哥来了，小兔见地上到处是玻璃片，赶紧用扫把把玻璃片扫干净。
    
    　　中午吃饭的时候，我津津有味地吃了起来嘴里还说：“咦？我爱吃的糖醋排骨怎么还没上呢？”被我这么一说弄得大家都没胃口再吃了。我看见大家都不吃了，就问他们为什么不吃？小兔回答说：“因为你太没有礼貌了所以能得大家都没胃口了！”
    
    　　我想通过这件事对人类说：“礼貌对人，懂得文明！”`,
    `假如我是一只狗， 我的生活就会发生很大的改变。

    　　如果我是一只狗，我就可以在家里玩，不用非常累地去学习，每天也不会有写不完的功课。 我还可以每天依赖主人来养我照顾我，每天轻轻松松的生活。因为每天不上学，学不到新的东西， 我有可能会变得比较笨。但我会天天陪着主人，开开心心的生活。我可以享受地上打滚是什么样的感觉。在冬天的时候，我还有我的毛来帮我度过冷的天气。
    
    　　我一开始觉得当一只狗是一件好的事情，可是之后我就不这么认为了。因为如果我真的变成了一只狗，我就没法去很多地方像台湾，美国还有日本。这些都是我非常想去的地方，所以变成狗也不会幸福的。而且在很热的天气，我也没法把身上的毛给脱掉，这样我会非常的热，对于怕热的我来说，这是很大的折磨啊！
    
    　　总体来讲，变成狗有好处也有坏处，就看你的生活是想要什么样子的。`,
    `早上起来，我发现我自己变成了一条狗，我想跟妈妈说话，但是只能汪汪的叫，这使我很伤心，我便偷偷的溜出了家。

    　　来到大街上，我发现许多许多的流浪狗，我跟着他们同行。过了一会儿我离开它们，向着自己的路程前进。我跑到了一个垃圾站，看见哪里正好有一只小母狗，我就跟她谈论。
    
    　　我问她：“你叫什么名字？”哪只小母狗说：“我叫安安，你叫什么？”我笑嘻嘻的对她说：“我叫张竞晨，你是从哪里来的？”安安说：“我曾经有一个主人，但是他抛弃了我，你有一个妈妈吧？”我半信半疑的说：“你这么厉害呀，这么容易就能猜出来。”我的主人教过我辨别狗的来源。安安回答道。我说：“原来如此呀。”
    
    　　从此我们两个成了最要好的朋友，我们一起盖了一间房子，但是我还是怀念着妈妈。
    
    　　我一下醒了，自言自语的说：“这原来是一个要好的梦呀。”`
  ]
  let body = content[ctx.query[index]]
  ctx.body = body
})
router.get('/getItems',async (ctx, next) => {
  let { page = 1 } = ctx.query
  let items = [
    {
      imgUrl: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
      name: '巴哥'
    }, {
      imgUrl: 'https://pic4.zhimg.com/v2-c9bd374600759461c79628990767f661_1200x500.jpg',
      name: '二哈'
    }, {
      imgUrl: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497',
      name: '金毛'
    }, {
      imgUrl: 'https://loveupets.com/upload/20181028040328.jpg',
      name: '柯基'
    }
  ]
  if(page >= 15) {
    items = []
  }
  let data ={
    page,
    items,
    nextUrl: `//${ctx.host}/getItems?page=${++page}`
  }
  console.log(ctx.origin);
  ctx.body = data
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
