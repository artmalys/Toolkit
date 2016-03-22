val akkaVersion = "2.4.2"


val commonDeps = Seq(ws,  filters, cache, evolutions,
  "com.typesafe.akka" %% "akka-actor" % akkaVersion,
  "com.typesafe.akka" %% "akka-cluster" % akkaVersion,
  "com.typesafe.akka" %% "akka-cluster-metrics" % akkaVersion,
  "com.typesafe.akka" %% "akka-slf4j" % akkaVersion,
  "com.google.guava" % "guava" % "18.0",
  "mysql" % "mysql-connector-java" % "5.1.36",
  "com.typesafe.play" %% "play-slick" % "2.0.0",
  "com.typesafe.play" %% "play-slick-evolutions" % "2.0.0"
)

/*
 * Settings which apply to all modules of this application
 */
val commonSettings = Seq(
  organization := "your.organization",
  version := "2.5.0",
  scalaVersion := "2.11.7",
  logLevel := Level.Warn
)


lazy val root = (project in file("."))
  .settings(
    name := "mpi-toolkit"
  )
  .aggregate(mvc, cluster, api)


lazy val mvc = (project in file("mvc"))
  .enablePlugins(PlayScala, JavaAppPackaging)
  .settings(
    commonSettings,
    name := "mpi-toolkit-mvc",
    libraryDependencies ++= (commonDeps ++ Seq(
      "org.webjars" %% "webjars-play" % "2.5.0",
      "org.webjars" % "jquery" % "2.2.1",
      "org.webjars" % "foundation" % "6.2.0",
      "org.json4s" %% "json4s-jackson" % "3.3.0",
      "org.scalaz" %% "scalaz-core" % "7.2.1",
      "org.webjars" % "mithril" % "0.2.3")),
    pipelineStages := Seq.empty,
    sassOptions in Assets ++= Seq("--compass", "-r", "compass"),
    sassOptions in Assets ++= Seq("--cache-location", "target/web/sass/.sass-cache")
    ).dependsOn(api)


lazy val cluster = (project in file("cluster"))
  .settings(
    commonSettings,
    name := "mpi-toolkit-cluster",
    libraryDependencies ++= commonDeps
  ).dependsOn(api)


lazy val api = (project in file("api"))
  .settings(
    commonSettings,
    name := "mpi-toolkit-api",
    libraryDependencies ++= commonDeps
  )



dependencyOverrides += "org.webjars" % "jquery" % "2.2.1"
ivyScala := ivyScala.value map { _.copy(overrideScalaVersion = true) }
resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
/*
resolvers += "Typesafe Repository" at "http://repo.typesafe.com/typesafe/releases/"
resolvers += "Typesafe Snapshots" at "http://repo.typesafe.com/typesafe/snapshots/"
resolvers += Resolver.url("Typesafe Ivy releases", url("https://repo.typesafe.com/typesafe/ivy-releases"))(Resolver.ivyStylePatterns)
*/




scalacOptions ++= Seq(
  "-target:jvm-1.8",
  "-deprecation",
  "-unchecked",
  "-feature",
  "-optimise",
  "-explaintypes",
  "-encoding", "UTF-8",
  "-Xlint",
  "-Ywarn-adapted-args", // Warn if an argument list is modified to match the receiver
  "-Ywarn-value-discard", // Warn when non-Unit expression results are unused
  "-Ywarn-inaccessible",
  "-Ywarn-dead-code"
)
